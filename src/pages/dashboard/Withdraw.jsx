

let Withdraw = () => {
    return (
        <>
        <img src="images/img-2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Withdraw</h5>
                    <p class="card-text">Enter the amount you want to withdraw.</p>
                    <input type="number" id="withdraw-amount" class="form-control mb-3" placeholder="Enter amount" />
                    <a href="#" class="btn btn-primary w-100" onclick="withdraw()">Withdraw</a>
                </div>
        </>
    )
}

export default Withdraw;