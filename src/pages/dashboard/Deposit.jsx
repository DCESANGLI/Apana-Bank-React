

let Deposit = () => {
    return (
        <>
        <img src="images/img-1.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Deposit Money</h5>
                    <p class="card-text">Enter the amount you want to deposit.</p>
                    <input type="number" id="deposit-amount" class="form-control mb-3" placeholder="Enter amount" />
                    <a href="#" class="btn btn-primary w-100" onclick="deposit()">Deposit</a>
                </div>
        </>
    )
}

export default Deposit;