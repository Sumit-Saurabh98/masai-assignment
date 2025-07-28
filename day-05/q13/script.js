function countCategories(categories) {
    return categories.reduce((acc, category) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});
  }
  
  const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
  const result = countCategories(categories);
  console.log(result);
  