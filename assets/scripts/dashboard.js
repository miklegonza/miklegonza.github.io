//setTimeout(function() { location.reload(); }, 30000);

var card = $(".card");
card.on("mousenter", () => {
    card.not($(this)).addClass("blur");
}).on("mouseleave", function () {
    card.removeClass("blur");
});
