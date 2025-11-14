import { useState } from "react";
import "./App.css";
import useUser from "./useUser";
import Loader from "./Loader";

function App() {
  const { data, isLoading } = useUser();

  const [searchValue, setSearchValue] = useState("");

  const searchedUser = data?.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-center mt-6 ">
            <input
              value={searchValue}
              onChange={handleSearch}
              className="border-2 p-2"
              placeholder="Enter name"
            ></input>
          </div>
          <div className="flex justify-center mt-4">
            <table className="table-auto border border-gray-400">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">City</th>
                </tr>
              </thead>
              <tbody>
                {searchedUser.length > 0 ? (
                  searchedUser.map((item) => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">{item.email}</td>
                      <td className="border px-4 py-2">{item.address.city}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-red-700 text-center">
                      No User Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
