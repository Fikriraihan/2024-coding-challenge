function minUmbrellas(weather) {
  let count = 0;
  weather.map((val, i, arr) => ((val === "rainy" || val === "thunderstorms") && val === arr[i] ? count++ : count));
  //   for (let i = 0; i < weather.length; i++) {
  //     if (weather[i] === 'rainy') {
  //         if (weather[i] !== weather) {

  //         }
  //     }
  //   }
  return weather.indexOf("rainy");
}

console.log(minUmbrellas(["cloudy"]));
console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]));
console.log(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]));
