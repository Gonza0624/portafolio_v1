const margin = {
    marginRight: '30px'
} 

export const Card = ({ name, info, link, repo, image }) => {
  return (
    <figure class="projects__card">
      <img src={image} />
      <div className="projects__info">
        <h2>{name}</h2>
        <p>{info}</p>
        <div>
          <a target='_blanck' style={margin} href={link}>open project &raquo;</a>
          <a target='_blanck' href={repo}>repository &raquo;</a>
        </div>
      </div>
    </figure>
  );
};
