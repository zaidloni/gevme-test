import { useState } from "react";
const App = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [submissionCount, setSubmissionCount] = useState(1);
  const [tableData, setTableData] = useState([]);

  // function to handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      const obj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        count: submissionCount,
      };
      setSubmissionCount((prev) => prev + 1);
      setTableData((prev) => [...prev, obj]);
    }else{
      alert("Please enter all the values first")
    }
  };
  return (
    <div>
      <form className="flex flex-col justify-center mt-4 mx-auto max-w-[50vw]">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border rounded border-black py-2 pl-3"
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border my-2 rounded border-black py-2 pl-3"
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded border-black py-2 pl-3"
          type="email"
          placeholder="Email"
        />
        <button
          onClick={handleSubmit}
          className="border border-black mt-2 py-3 bg-blue-100"
        >
          Submit
        </button>
      </form>
      {tableData.length > 0 && (
        <table className="border border-black mt-4  w-[90vw] mx-auto">
          <thead>
            <tr className="h-14 border border-black">
              <th className="border border-black">First Name</th>
              <th className="border border-black">Last Name</th>
              <th className="border border-black">Email</th>
              <th className="border border-black">Submission Count</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item) => (
              <tr className="h-10">
                <td className="text-center border border-black">
                  {item?.firstName}
                </td>
                <td className="text-center border border-black">
                  {item?.lastName}
                </td>
                <td className="text-center border border-black">
                  {item?.email}
                </td>
                <td className="text-center border border-black">
                  {item?.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
