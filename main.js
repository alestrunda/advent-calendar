new Vue({
  el: "#calendar",
  data: {
    days: new Array(24).fill(undefined).map((_, index) => {
      const topPercentOffset = 12;
      const topLeftOffset = 10;

      const topPercent = Math.floor(index / 4) * 22 + topPercentOffset;
      const leftPercent = (index % 4) * 13 + topLeftOffset;
      const topPixel = (document.body.clientWidth / 100) * topPercent;
      const leftPixel = (document.body.clientHeight / 100) * leftPercent;

      return {
        backgroundPosition: `-${leftPixel + "px"} -${topPixel + "px"}`,
        backgroundSize: document.body.clientWidth + "px",
        number: index + 1,
        top: topPixel + "px",
        left: leftPixel + "px"
      };
    }),
    daysActive: JSON.parse(localStorage.getItem("daysActive") || "[]")
  },
  methods: {
    toggle: function(dayNumber) {
      const index = this.daysActive.findIndex(number => number === dayNumber);
      if (index === -1) this.daysActive.push(dayNumber);
      else this.daysActive.splice(index, 1);
      //save local storage
      localStorage.setItem("daysActive", JSON.stringify(this.daysActive));
    }
  }
});
