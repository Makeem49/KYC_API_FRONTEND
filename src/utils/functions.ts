import { saveAs } from "file-saver";
import { json2csv } from "json-2-csv";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import React from "react";
import { toast } from "react-toastify";

export async function fetchAll<T>(
  fn: (pageNo: number) => Promise<T[]>,
  pageNo = 1
) {
  const data = await fn(pageNo);

  if (data.length > 0) {
    return data.concat(await fn(pageNo + 1));
  } else {
    return data;
  }
}

export const useDebouncedEffect = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
  delay: number
) => {
  React.useEffect(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};

export function searchText(array: any[], searchTerm: string) {
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    for (let key in array[i]) {
      if (typeof array[i][key] === "string") {
        if (array[i][key].toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(array[i]);
          break;
        }
      }
      if (typeof array[i][key] === "number") {
        if (array[i][key].toString().includes(searchTerm.toString())) {
          matches.push(array[i]);
          break;
        }
      }
    }
  }
  return matches;
}

export function searchSpecificText(array: any[], searchTerm: string) {
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    for (let key in array[i]) {
      if (typeof array[i][key] === "string") {
        if (array[i][key].toLowerCase().startsWith(searchTerm.toLowerCase())) {
          matches.push(array[i]);
          break;
        }
      }
      if (typeof array[i][key] === "number") {
        if (array[i][key].toString().startsWith(searchTerm.toString())) {
          matches.push(array[i]);
          break;
        }
      }
    }
  }
  return matches;
}

export const isDeepEqual = (
  object1: { [key: string]: any },
  object2: { [key: string]: any }
) => {
  const isObject = (object: Object) => {
    return object != null && typeof object === "object";
  };
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) return false;
  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    const isObjects = isObject(value1) && isObject(value2);
    if (
      (isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};
// Insert into array in place
export const insert = (arr: any[], index: number, newItem: any) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem, // part of the array after the specified index
  ...arr.slice(index),
];

export function get_nested_value(
  obj: { [key: string]: any },
  accessors?: string
): string {
  if (!accessors) return "";

  const keys = accessors.split(".");

  for (let i = 0; i < keys.length; i++) {
    obj = obj[keys[i]];
  }
  return obj as unknown as string;
}

function omit(obj: Record<string, any>, arr: string[]) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (arr.includes(key)) {
        delete obj[key];
      } else if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
          omit(obj[key][i], arr);
        }
      } else if (typeof obj[key] === "object") {
        omit(obj[key], arr);
      }
    }
  }
  return obj;
}

// export function exportToCSV(
//   array: Record<string, any>[],
//   keysToHide: string[]
// ) {
//   const newArray = array.map((el) => omit(el, keysToHide));

//   return json2csv(
//     newArray,
//     (err, csv) => {
//       if (err) {
//         // handle Error
//         console.log(err);
//       }

//       const blob = new Blob([csv!], { type: 'text/csv;charset=utf-8;' });
//       saveAs(blob, 'data.csv');
//       // Add a Toast
//     },
//     {
//       expandArrayObjects: true,
//     }
//   );
// }

export function exportToCSV(
  array: Record<string, any>[],
  keysToHide: string[]
) {
  // Display loading toast
  const toastId = toast.info("Exporting data...", { autoClose: false });

  const newArray = array.map((el) => omit(el, keysToHide));

  return json2csv(
    newArray,
    (err, csv) => {
      if (err) {
        // handle Error

        // Hide loading toast and show error toast
        toast.error("Error exporting data");
      } else {
        const blob = new Blob([csv!], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "data.csv");
        // Hide loading toast and show success toast
        toast.success("Data exported successfully");
      }
      // Remove the loading toast
      toast.dismiss(toastId);
    },
    {
      expandArrayObjects: true,
    }
  );
}

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function exportToPDF(
  array: Record<string, any>[],
  keysToHide: string[]
) {
  // Display loading toast
  const toastId = toast.info("Exporting data...", { autoClose: false });

  const newArray = array.map((el) => omit(el, keysToHide));

  const documentDefinition = {
    content: [
      {
        table: {
          headerRows: 1,

          widths: Object.keys(newArray[0]).map(() => "auto"),
          body: [
            Object.keys(newArray[0]).map((key) => key), // Table header
            ...newArray.map((item) =>
              Object.values(item).map((value) => value.toString())
            ), // Table data
          ],
        },
      },
    ],
  };

  const pdf = pdfMake.createPdf(documentDefinition);
  pdf.download("data.pdf", () => {
    // Hide loading toast and show success toast
    toast.success("Data exported successfully");
    // Remove the loading toast
    toast.dismiss(toastId);
  });
}

interface ExportData {
  [key: string]: any;
}

export async function exportToPDF2(
  array: ExportData[],
  keysToHide: string[]
): Promise<void> {
  // Display loading toast
  const toastId = toast.info("Exporting data...", { autoClose: false });

  const newArray = array.map((el) => omit(el, keysToHide));

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  const { width, height } = page.getSize();
  const tableWidth = width - 40;
  const cellPadding = 5;
  const headerBackgroundColor = rgb(0.2, 0.4, 0.6);
  const headerTextColor = rgb(1, 1, 1);
  const rowBackgroundColor = rgb(1, 1, 1);
  const rowTextColor = rgb(0, 0, 0);

  const headerFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const dataFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const headerTextSize = 12;
  const rowTextSize = 10;

  let currentY = height - 30;

  // Draw table headers
  Object.keys(newArray[0]).forEach((key, columnIndex) => {
    const textWidth = headerFont.widthOfTextAtSize(key, headerTextSize);
    const columnWidth = tableWidth / Object.keys(newArray[0]).length;
    const x = 20 + columnIndex * columnWidth + (columnWidth - textWidth) / 2;

    // Draw header background
    page.drawRectangle({
      x: x - cellPadding,
      y: currentY,
      width: columnWidth,
      height: headerTextSize + 5 * cellPadding,
      color: headerBackgroundColor,
    });

    page.drawText(key, {
      x,
      y: currentY + headerTextSize + cellPadding,
      font: headerFont,
      size: headerTextSize,
      color: headerTextColor,
    });
  });

  currentY -= 20;

  // Draw table rows
  newArray.forEach((item, rowIndex) => {
    Object.values(item).forEach((value, columnIndex) => {
      const textWidth = dataFont.widthOfTextAtSize(
        value.toString(),
        rowTextSize
      );
      const columnWidth = tableWidth / Object.keys(newArray[0]).length;
      const x = 20 + columnIndex * columnWidth + (columnWidth - textWidth) / 2;

      // Draw row background
      page.drawRectangle({
        x: x - cellPadding,
        y: currentY,
        width: columnWidth,
        height: rowTextSize + 2 * cellPadding,
        color: rowIndex % 2 === 0 ? rowBackgroundColor : rgb(1, 1, 1),
      });

      page.drawText(value.toString(), {
        x: x + cellPadding,
        y: currentY + rowTextSize + cellPadding,
        font: dataFont,
        size: rowTextSize,
        color: rowTextColor,
      });
    });

    currentY -= rowTextSize + 2 * cellPadding;
  });

  // Draw table borders
  // page.drawRectangle({
  //   x: 20,
  //   y: currentY + cellPadding,
  //   width: tableWidth,
  //   height: height - currentY + cellPadding,
  //   borderWidth: 1,
  //   borderColor,
  // });

  // Object.keys(newArray[0]).forEach((_, columnIndex) => {
  //   const columnWidth = tableWidth / Object.keys(newArray[0]).length;
  //   const x = 20 + columnIndex * columnWidth;

  //   page.drawLine({
  //     start: { x, y: currentY + cellPadding },
  //     end: { x, y: height },
  //     thickness: 1,
  //     color: borderColor,
  //   });
  // });

  // Hide loading toast and show success toast
  toast.success("Data exported successfully");
  // Remove the loading toast
  toast.dismiss(toastId);

  const pdfBytes = await pdfDoc.save();

  // Trigger file download
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.pdf";
  link.click();
  URL.revokeObjectURL(url);
}

// export async function exportToPDF2(
//   array: ExportData[],
//   keysToHide: string[]
// ): Promise<void> {
//   // Display loading toast
//   const toastId = toast.info('Exporting data...', { autoClose: false });

//   const newArray = array.map((el) => omit(el, keysToHide));

//   const pdfDoc = await PDFDocument.create();

//   const page = pdfDoc.addPage();
//   const { width, height } = page.getSize();

//   const headerTextSize = 16;
//   const rowTextSize = 12;
//   const padding = 10;

//   let currentY = height - padding;

//   // Add table header
//   const headerFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
//   page.drawText('', {
//     x: padding,
//     y: currentY,
//     font: headerFont,
//     size: headerTextSize,
//     color: rgb(0, 0, 0),
//   });
//   currentY -= headerTextSize + padding;

//   // Add table data
//   const dataFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//   newArray.forEach((item) => {
//     const rowText = Object.values(item).join(', ');
//     page.drawText(rowText, {
//       x: padding,
//       y: currentY,
//       font: dataFont,
//       size: rowTextSize,
//       color: rgb(0, 0, 0),
//     });
//     currentY -= rowTextSize + padding;
//   });

//   const pdfBytes = await pdfDoc.save();

//   // Hide loading toast and show success toast
//   toast.success('Data exported successfully');
//   // Remove the loading toast
//   toast.dismiss(toastId);

//   // Trigger file download
//   const blob = new Blob([pdfBytes], { type: 'application/pdf' });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement('a');
//   link.href = url;
//   link.download = 'data.pdf';
//   link.click();
//   URL.revokeObjectURL(url);
// }

export function paramsSerializer(params: Record<string, unknown>) {
  return Object.entries(Object.assign({}, params))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

export function addToObj(key: string, value: unknown) {
  if (value === "active") {
    return Object.assign({}, { [key]: "true" });
  } else if (value === "inactive") {
    return Object.assign({}, { [key]: "false" });
  } else {
    return Object.assign({}, { [key]: value });
  }
}
