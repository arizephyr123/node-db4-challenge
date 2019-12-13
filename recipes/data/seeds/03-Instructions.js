exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          id: 1,
          step_number: 1,
          instruction: "Peel, wash veggies.",
          recipe_id: 1
        },
        {
          id: 2,
          step_number: 2,
          instruction: "Cook onions in pot with oil, add veggies",
          recipe_id: 1
        },
        {
          id: 3,
          step_number: 3,
          instruction:
            "Add broth, dill, red wine vinegar, cabbage. Simmer till veggies tender",
          recipe_id: 1
        },
        {
          id: 4,
          step_number: 1,
          instruction: "Peel and wash carrots.",
          recipe_id: 2
        },
        {
          id: 5,
          step_number: 2,
          instruction:
            "Place on oiled cooking sheet, season with salt, pepper, other seasoning of choice.",
          recipe_id: 2
        },
        {
          id: 6,
          step_number: 3,
          instruction: "Bake at 420 degrees for 35 minutes",
          recipe_id: 2
        },
        {
          id: 7,
          step_number: 1,
          instruction: "Mix Kool-Aid powder, sugar and water in pitcher.",
          recipe_id: 3
        },
        { id: 8, step_number: 2, instruction: "Enjoy chilled.", recipe_id: 3 },
        { id: 9, step_number: 4, instruction: "Enjoy.", recipe_id: 1 },
        { id: 10, step_number: 4, instruction: "Enjoy.", recipe_id: 2 }
      ]);
    });
};
