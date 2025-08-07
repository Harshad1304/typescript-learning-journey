var NewOrder;
(function (NewOrder) {
    NewOrder[NewOrder["PENDING"] = 0] = "PENDING";
    NewOrder[NewOrder["APPROVED"] = 1] = "APPROVED";
    NewOrder[NewOrder["REJECTED"] = 2] = "REJECTED";
    NewOrder[NewOrder["DELIVERED"] = 3] = "DELIVERED";
})(NewOrder || (NewOrder = {}));
var order1 = {
    id: new Date().getTime(),
    status: NewOrder.PENDING,
};
var ordertwo = {
    id: new Date().getTime() + 1,
    status: 2 /* OldOrder.REJECTED */,
};
