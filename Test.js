
document.querySelector(".table").addEventListener("click", function (event) {

    if (event.target.tagName === "INPUT") {
        var productId = event.target.parentNode.parentNode.parentNode.attributes.productId.value;

        deleteObject("http://localhost:3000/api/orders/" + orderId.value + "/products/" + productId)
            .then(function (data) {
                refreshTable();
                console.log(data);
            })
            .catch(function (error) {
                console.log("Network  " + error);
            })

    }
});


document.querySelector(".basket").addEventListener("click", function (event) {

    deleteObject("http://localhost:3000/api/orders/" + orderId.value + "/products/")
        .then(function (data) {
            return data;
        })
        .then(function (data) {
            deleteObject("http://localhost:3000/api/orders/" + orderId.value)
                .then(function (data) {
                    refreshListOrders();
                    loadingPage(Orders[0]);
                })
        })
        .catch(function (error) {
            console.log(error.name + error);
        });

});


//search on ENTER

document.getElementById("inputText").addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        search();
    }
});


document.getElementById("search").addEventListener("click", function () {
    search();
});