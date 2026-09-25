export const move_to_section = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};
