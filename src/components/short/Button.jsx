/* eslint-disable react/prop-types */

function Button({title}) {
  return (
    <a
      href="#"
      className="bg-main text-white rounded text-base md:text-lg font-medium py-3 px-8 inline-block"
    >
      {title}
    </a>
  );
}

export default Button