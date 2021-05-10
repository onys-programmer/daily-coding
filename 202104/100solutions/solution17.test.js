test('', () => {
  let styles = [ "Jazz", "Blues" ];

  styles.push("Rock-n-Roll");
  expect(styles[2]).toBe("Rock-n-Roll");

  styles[Math.floor((styles.length - 1) / 2)] = "Classics"
  expect(styles[1]).toBe("Classics");

  expect(styles.shift()).toBe("Jazz");

  styles.unshift("Rap", "Reggae");
  expect(styles).toStrictEqual(["Rap", "Reggae", "Classics", "Rock-n-Roll"]);
});
