
const dataSource = [
  { 
    label: "Engineering", 
    children: [
      { label: "Computer Science and Engineering" },
      { label: "Electronics Engineering" },
      { label: "Bio-Technology" },
      { label: "Mechanical Engineering" }
    ] 
  },
  {
    label: "Medicine"
  },
  {
    label: "Commerce",
    children: [
      { label: "Economics" },
      {
        label: "Management",
        children: [
          { label: "Business Management" },
          { label: "Financial Management" }
        ]
      }
    ]
  }
];

export { dataSource };