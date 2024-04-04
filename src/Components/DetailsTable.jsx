import files from "../assets/files";

function DetailsTable() {
  return (
    <>
      <section
        className="white-bg width-100 padding-20 gap-20 column border-rad-14 gray-border"
      >
        <section className="row space-between gap-10 wrap-400">
          <h3 className="heading-3">Last Orders</h3>
          <h3 className="heading-3 green">See All</h3>
        </section>
        <table className="table-heading">
          <thead className="table-bold table-head">
            <tr className="table-head-row">
              <td>Name</td>
              <td>Date</td>
              <td>Amount</td>
              <td>Status</td>
              <td>Invoice</td>
            </tr>
          </thead>
          <tbody>
            <tr className="table-rows">
              <td>
                <p className="gap-10 row align-center table-bold">
                  <img src={files.profile1} alt="profile1" />
                Akigbogun Emmanuel
                </p>
              </td>
              <td>Nov 15, 2023</td>
              <td className="table-bold">$80,000</td>
              <td className="green">Paid</td>
              <td>
                <p className="gap-10 row align-center table-view">
                  View <img src={files.download} alt="download" />
                </p>
              </td>
            </tr>
            <tr className="table-rows">
              <td>
                <p className="gap-10 row align-center table-bold">
                  <img src={files.profile2} alt="profile1" />
                  Jaydon Vaccaro
                </p>
              </td>
              <td>Nov 15, 2023</td>
              <td className="table-bold">$150,000</td>
              <td className="red">Refund</td>
              <td>
                <p className="gap-10 row align-center table-view">
                  View <img src={files.download} alt="download" />
                </p>
              </td>
            </tr>
            <tr className="table-rows">
              <td>
                <p className="gap-10 row align-center table-bold">
                  <img src={files.profile3} alt="profile1" />
                  Corey Schleifer
                </p>
              </td>
              <td>Nov 14, 2023</td>
              <td className="table-bold">$87,000</td>
              <td className="green">Paid</td>
              <td>
                <p className="gap-10 row align-center table-view">
                  View <img src={files.download} alt="download" />
                </p>
              </td>
            </tr>
            <tr className="table-rows">
              <td>
                <p className="gap-10 row align-center table-bold">
                  <img src={files.profile4} alt="profile1" />
                  Cooper Press
                </p>
              </td>
              <td>Nov 14, 2023</td>
              <td className="table-bold">$100,000</td>
              <td className="red">Refund</td>
              <td>
                <p className="gap-10 row align-center table-view">
                  View <img src={files.download} alt="download" />
                </p>
              </td>
            </tr>
            <tr className="table-rows">
              <td>
                <p className="gap-10 row align-center table-bold">
                  <img src={files.profile5} alt="profile1" />
                  Phillip Lubin
                </p>
              </td>
              <td>Nov 13, 2023</td>
              <td className="table-bold">$78,000</td>
              <td className="green">Paid</td>
              <td>
                <p className="gap-10 row align-center table-view">
                  View <img src={files.download} alt="download" />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
export default DetailsTable;
