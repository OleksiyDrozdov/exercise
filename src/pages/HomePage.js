import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ipsam consequuntur necessitatibus architecto reiciendis quam obcaecati facilis laudantium cupiditate nisi repellendus nihil hic ullam deserunt, illo, tempora velit vitae."
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego",
    author: "Ania Kwiatkowska",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ipsam consequuntur necessitatibus architecto reiciendis quam obcaecati facilis laudantium cupiditate nisi repellendus nihil hic ullam deserunt, illo, tempora velit vitae."
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Kowalski",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ipsam consequuntur necessitatibus architecto reiciendis quam obcaecati facilis laudantium cupiditate nisi repellendus nihil hic ullam deserunt, illo, tempora velit vitae."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
