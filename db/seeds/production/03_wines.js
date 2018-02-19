exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE "Wine" CASCADE')
  .then(function () {
    return Promise.all([
      knex("Wine").insert([
        { name: "White Table Wine",
          description: "White wine that is not sparkling or fortified.",
          wine_category_id: 1 },
        { name: "Sauvignon Blanc",
          description: "Aromas and crisp tastes of herbs and grasses.",
          wine_category_id: 1 },
        { name: "Grüner Veltliner",
          description: "Citrus tastes ranging from lime, lemon, and grapefruit with a hint of spice accociated to green or white pepper.",
          wine_category_id: 1 },
        { name: "Pinot Grigio",
          description: "Crisp citrus flavors intertwined with green apples and honeysuckle.",
          wine_category_id: 1 },
        { name: "Albariño",
          description: "Brings together the tasts or lemon, grapefruit, honeydew, nectarine and a hint of saltiness.",
          wine_category_id: 1 },
        { name: "Gewürztraminer",
          description: "Sweet aromas with hints of floral and lychee fruit with low acidity.",
          wine_category_id: 2 },
        { name: "Müiler-Thurgau",
          description: "Low acidity with flavors of fruit and aromas of peach.",
          wine_category_id: 2 },
        { name: "Malvasia",
          description: "Mid to low acidity with flavors of ripe pear and honey with just a hint of spice.",
          wine_category_id: 2 },
        { name: "Moscato",
          description: "Sweet with flavors of orange, peach, and nectarine with a bit of fizz.",
          wine_category_id: 2 },
        { name: "Riesling",
          description: "High acidity with floral aromas and can range from sweet to dry.",
          wine_category_id: 2 },
        { name: "Chardonnay",
          description: "Wider-bodied with citrus flavors including lemon and grapefruit it also has flavors from the oak it ferments in that include buttery tones of vanilla and toffee.",
          wine_category_id: 3 },
        { name: "Roussane",
          description: "Full body wine with flavors of honey and pear with a floral herbal tea aroma.",
          wine_category_id: 3 },
        { name: "Marsanne",
          description: "Mineral and melon flavors that may include some nuttiness with age.",
          wine_category_id: 3 },
        { name: "Viognier",
          description: "Floral aromatics with peach and apricot flavor that may be mixed with buttery tones if aged in oak.",
          wine_category_id: 3 },
        { name: "Sparkling Wine",
        description: "Has carbon dioxide in it to give it a strong fizz.",
        wine_category_id: 4 },
        { name: "Champagne",
          description: "Range of flavors including apple, pear, citrys, strawberry, vanilla, and nutty flavors with strong fizziness.",
          wine_category_id: 4 },
          { name: "Prosecco",
          description: "Fruity flavors of green apple, honeydew melon, pear, and honeysuckle give it a bit of sweetness in a dry, fizzy style.",
          wine_category_id: 4 },
        { name: "Cava",
          description: "High acidity with citrus flavors and fizz.",
          wine_category_id: 4 },
        { name: "St. Laurent",
          description: "Aromas of cherry, black current and possibly oak with fruit flavors of cranberry.",
          wine_category_id: 5 },
        { name: "Pinot Noir",
          description: "High acidity and low tannis it is lighter in color with aromas and flavors of rose, black cherry, currant, and berry.",
          wine_category_id: 5 },
        { name: "Zweigelt",
          description: "Faint tannins with cherry and black currant, sometimes known as cassis, fruit flavors.",
          wine_category_id: 5 },
        { name: "Gamay",
          description: "Fruity and tart flavors including rasberry, cherries and banana in this light bodied wine.",
          wine_category_id: 5 },
        { name: "Red Table Wine",
          description: "Red wine that is not sparkling or fortified.",
          wine_category_id: 6 },
        { name: "Tempranillo",
          description: "Cherry flavors with a mix of earthy vanilla from oak barrels.",
          wine_category_id: 6 },
        { name: "Sangiovese",
          description: "High in acidity and tannin with a variety of flavors including cherry, blueberry, blackberry, plum and vanilla and spice from oak barrels.",
          wine_category_id: 6 },
        { name: "Zinfandel",
          description: "Fruity flavors of raspberries, cherries, strawberries, and red plums mixed with spice and pepper.",
          wine_category_id: 6 },
        { name: "Grenache",
          description: "Subtle white pepper flavor mixed with raspberry and strawberry.",
          wine_category_id: 6 },
        { name: "Merlot",
          description: "Aromas of cherry and cocoa with hints of vanilla, clove or smokey tones interwined with fruit flavors that range from plums, cherries, blueberries, blackberries, mixed with black pepper and cocoa.",
          wine_category_id: 6 },
        { name: "Cabernet Sauvignon",
          description: "Higher tannins with a complexity of flavors and aromas of dark fruits including plum, black cherry, blackberry, blueberry, and spice of vanilla and black pepper.",
          wine_category_id: 7 },
        { name: "Monastrell",
          description: "Strong tannins with herby aromas and black fruit flavors with spice.",
          wine_category_id: 7 },
        { name: "Aglianico",
          description: "Complex flavors of black fruit, dark chocolate, coffee, and smoke.",
          wine_category_id: 7 },
        { name: "Malbec",
          description: "Fruity flavors of blackberry, plum and black currant intertwined with chocolate violet flowers and a sweet tobacco finish depending on the oak aging.",
          wine_category_id: 7 },
        { name: "Syrah",
          description: "Aromas of berry and cocoa with a flavor of black currant, red berry and chocolate.",
          wine_category_id: 7 },
        { name: "Late Harvest",
          description: "Grapes that have been left on the vine longer have increased sugars and flavors.",
          wine_category_id: 8 },
        { name: "Ice Wine",
          description: "Those made from white grapes have a honey sweetness mixed with a tropical mango and plum, cherry or peach flavor. Those made from red grapes tend to have flavors of strawberry or sweetened red fruit miexed with a sweet but spicy aroma.",
          wine_category_id: 8 },
        { name: "Sherry",
          description: "Sweetened with sun-dried Pedo Ximénez grapes for a flavor of fid and molasses.",
          wine_category_id: 8 },
        { name: "Port",
          description: "Drier fruit flavors with added complexity of nuttiness, fig, rum and spice aromas.",
          wine_category_id: 8 },
      ])
    ])
  })
}