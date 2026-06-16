const categories  = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
  const title = item.querySelector('h2').textContent.trim();
  const elementsCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});

