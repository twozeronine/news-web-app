import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

function NewsPage({ match }) {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const categroy = match.params.category || "all";

  return (
    <div>
      <Categories />
      <NewsList category={categroy} />
    </div>
  );
}

export default NewsPage;
