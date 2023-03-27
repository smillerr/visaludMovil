import Header from "../components/Header";
import Body from "../components/Body";

const Template = () => {
  const view = `
    <div class="Container">
      ${Header()}
      ${Body()}
    </div>
  `;
  return view;
};

export default Template;