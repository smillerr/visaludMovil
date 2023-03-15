import Header from "../components/Header";

const Template = () => {
  const view = `
    <div class="Container">
      ${Header()}
    </div>
  `;
  return view;
};

export default Template;