import "react-router-dom";
import { queryByText, render, screen } from "@testing-library/react";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import PostCard from "./PostCard";

jest.mock("../../features/posts/like-dislike/posts-like-dislike");
jest.mock("../../features/posts/marked-posts/posts-marked-unmarked");

test("Title rendering", () => {
  render(
    <BrowserRouter>
      <PostCard
        id={1}
        text="text"
        title="Hello"
        date="2021-05-07"
        lesson_num={2}
      ></PostCard>
    </BrowserRouter>
  );
  //expect(screen.getByText("Hello")).toBeTruthy();
  const heading = screen.getByRole("heading", { level: 3 });
  expect(heading).toBeTruthy();
  expect(heading.textContent).toBe("Hello"); //не innerText or HTMLText
});
