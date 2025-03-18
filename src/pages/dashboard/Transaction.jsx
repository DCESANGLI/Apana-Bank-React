import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

let Transaction = () => {
  return (
    <>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card text-center p-3">
            <h4>Total Balance</h4>
            <h2 id="total-balance">₹10,000</h2>
          </div>
        </div>
      </div>

      <div class="row justify-content-center gap-3 p-3">
        <div class="col-md-4 col-sm-6 p-3">
          <div class="card m-auto">
            <Deposit />
          </div>
        </div>

        <div class="col-md-4 col-sm-6 p-3">
          <div class="card m-auto">
            <Withdraw />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
