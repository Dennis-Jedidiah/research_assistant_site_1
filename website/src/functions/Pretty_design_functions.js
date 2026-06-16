export const move_to_section = (section_id) => {
    document.getElementById(section_id)
    ?.scrollIntoView({behavior: "smooth"});
}

