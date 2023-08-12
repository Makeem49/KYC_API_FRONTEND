// import CreateUser from './components/create_user';

import { Form, Formik } from "formik";
import { useGetRiskEngine } from "../..//queries";
import { FormInput2 } from "../../components/form";
import ToggleButton from "../../components/toggleButton";
import { update_risk_engine } from "../../api/risk_engine";
import { useMutation, useQueryClient } from "react-query";
import { Skeleton } from "@mantine/core";
const Dashboard = () => {
  const { data } = useGetRiskEngine();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: update_risk_engine,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["riskEngine"] });
      window.location.reload();
      // To  invalidate and refetch
    },
  });

  const countries = data?.data;
  if (!data) {
    return <Skeleton className="w-full h-20" />;
  }
  // const countries = [
  //   {
  //     id: 1,
  //     account_balance: "12000.45",
  //     employed: true,
  //     minimum_monthly_salary: "120000.00",
  //     country: "INDONESIA",
  //   },
  //   {
  //     id: 2,
  //     account_balance: "12000.45",
  //     employed: true,
  //     minimum_monthly_salary: "120000.00",
  //     country: "NIGERIA",
  //   },
  //   {
  //     id: 3,
  //     account_balance: "12000.45",
  //     employed: true,
  //     minimum_monthly_salary: "120000.00",
  //     country: "INDIA",
  //   },
  // ];

  return (
    <Formik
      key={data?.data.toString()}
      initialValues={{
        countries,
      }}
      onSubmit={(values) => {
        mutation.mutate(values);
      }}
    >
      <Form>
        <div className="w-full flex flex-col gap-8 overflow-y-scroll h-[100vh] py-14 px-2 md:px-14">
          <div className="flex w-full justify-between items-center">
            <h2 className=" text-sinbadKYC-darkgreen text-2xl font-bold ">
              Risk Engine
            </h2>

            {/* <CreateUser /> */}
            <button
              type="submit"
              className=" p-4 bg-sinbadKYC-lemongreen text-sinbadKYC-darkgreen rounded-lg font-semibold"
            >
              Save
            </button>
          </div>

          {countries!?.map((country, index) => (
            <div className=" flex flex-col gap-4">
              <p className="font-bold text-sinbadKYC-grey border-b border-sinbadKYC-bordergrey py-4">
                {country?.country}
              </p>
              <FormInput2
                label="Account Balance (3 Month)"
                id={`countries[${index}].account_balance`}
                name={`countries[${index}].account_balance`}
                type="text"
                // placeholder="Free text"
              />
              {/* <FormInput2
                label="Employed:"
                id={`countries[${index}].employed`}
                name={`countries[${index}].employed`}
                type="text"
                // placeholder="Free text"
              /> */}

              <FormInput2
                label="Monthly Salary (Equal or More than):"
                id={`countries[${index}].minimum_monthly_salary`}
                name={`countries[${index}].minimum_monthly_salary`}
                type="text"
                // placeholder="Free text"
              />

              <div className="flex items-start gap-5 py-4 text-lg">
                {" "}
                <p>Employed:</p>
                <ToggleButton
                  id={`countries[${index}].employed`}
                  name={`countries[${index}].employed`}
                />
              </div>
            </div>
          ))}
        </div>
      </Form>
    </Formik>
  );
};

export default Dashboard;
