import React from "react";

// import { Skeleton } from '@mantine/core';

import { DataGrid } from "../../../../components";
import { useGetClientList } from "../../../../queries";
import UserAction from "./actions/drop down";
import { Skeleton } from "@mantine/core";

function PendingList() {
  const { data: list, isLoading } = useGetClientList();

  if (isLoading)
    return (
      <Skeleton
        height={500}
        style={{
          borderRadius: "25px",
        }}
      />
    );

  const ActionComponent = ({ data }: { data: ClientList }) => (
    <UserAction data={data} />
  );
  return (
    <>
      <div className="bg-white dark:bg-afexdark-darkest px-6">
        <DataGrid
          lastPage={1}
          total={1}
          title="Search"
          rows={10}
          data={list!?.data}
          headers={[
            {
              accessor: "name",
              hidden: false,
              name: "Name",
              sortable: true,
              static: false,
              secondary_key: "phone number",
              row: (val, second) => (
                <span className="flex flex-col">
                  <span className=" text-afexpurple-regular">{val}</span>
                  <span className="w-[140px]">{second}</span>
                </span>
              ),
            },
            {
              accessor: "verification_country",
              hidden: false,
              name: "Nationality",
              sortable: true,
              static: false,
            },

            {
              accessor: "available_balance",
              hidden: false,
              name: "Available Balance",
              sortable: true,
              static: false,
            },

            {
              accessor: "average_monthly_income",
              hidden: false,
              name: "Average monthly income",
              sortable: true,
              static: false,
            },

            {
              accessor: "source",
              hidden: false,
              name: "Source",
              sortable: true,
              static: false,
            },

            {
              accessor: "status",
              hidden: false,
              name: "Status",
              sortable: true,
              static: false,
              row: (val) => {
                if (val === "Low Risk") {
                  return (
                    <span className=" bg-afexgreen-extralight  text-afexgreen-darker dark:text-afexgreen-regular rounded-lg p-2">
                      {val}
                    </span>
                  );
                } else {
                  return (
                    <span className=" bg-afexblue-extralight text-afexblue-regular rounded-lg p-2">
                      {val}
                    </span>
                  );
                }
              },
            },
          ]}
          // withExport
          // withGlobalFilters
          withCheck // enable checkbox
          dateFilter={{
            enabled: false,
            accessor: "",
            label: "",
          }}
          headerFilter={[]}
          loadMore={function (page: number): void {
            throw new Error("Function not implemented.");
          }}
          setSearch={function (value: React.SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          }}
          setFilters={function (value: any): void {
            throw new Error("Function not implemented.");
          }}
          withActions // enable action column
          ActionComponent={ActionComponent} // action component
          // withNavigation // enable row navigation
          // navigationProps={{ baseRoute: 'client', accessor: 'id' }} // define navigation
        />
      </div>
    </>
  );
}

export default PendingList;
