/* eslint-disable react/prop-types */

function Team({team}) {
  return (
    <div className="text-center m-auto mb-3">
      <img src={team.img} alt={team.alt} className="rounded" />
      <h4 className="font-bold text-xl pt-3 text-black text-opacity-90">
        {team.name}
      </h4>
      <h4 className="font-medium text-md text-main">{team.title}</h4>
    </div>
  );
}

export default Team