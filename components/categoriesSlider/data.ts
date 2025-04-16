type CategoryImage = {
  id: string;
  image: string;
};

export type CategoriesData = {
  categoryName: string;
  categoryImages: CategoryImage[];
};

export const categoriesData: CategoriesData[] = [
  {
    categoryName: "أجبان وألبان",
    categoryImages: [
      {
        id: "1",
        image:
          "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "2",
        image:
          "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "3",
        image:
          "https://images.pexels.com/photos/2122278/pexels-photo-2122278.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "4",
        image:
          "https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
  {
    categoryName: "زيوت",
    categoryImages: [
      {
        id: "1",
        image:
          "https://images.pexels.com/photos/1022385/pexels-photo-1022385.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "2",
        image:
          "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "3",
        image:
          "https://images.pexels.com/photos/56019/mediterranean-food-tomatoes-red-56019.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "4",
        image:
          "https://images.pexels.com/photos/1611560/pexels-photo-1611560.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
  {
    categoryName: "بهارات وأصناف أخرى",
    categoryImages: [
      {
        id: "1",
        image:
          "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "2",
        image:
          "https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "3",
        image:
          "https://images.pexels.com/photos/1058035/pexels-photo-1058035.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "4",
        image:
          "https://images.pexels.com/photos/674483/pexels-photo-674483.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
  {
    categoryName: "خضار وفواكه",
    categoryImages: [
      {
        id: "1",
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "2",
        image:
          "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "3",
        image:
          "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "4",
        image:
          "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
];
