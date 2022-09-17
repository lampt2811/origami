import { render, screen } from "@testing-library/react";
import Post from "./Post";

test("renders Post component", () => {
  render(<Post />);
  const textElement = screen.getByText(/Author/i);
  console.log(
    "🚀 ~ file: post.test.js ~ line 7 ~ test ~ textElement",
    textElement
  );
  expect(textElement).toBeInTheDocument();
});
