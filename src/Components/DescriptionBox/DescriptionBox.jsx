import './DescriptionBox.css'
function DescriptionBox() {
  return (
    <div className="descriptionBox">
      <div className="container">
        <div className="DescriptionBox-navigator">
          <div className="DescriptionBox-nav-box ">Description</div>
          <div className="DescriptionBox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionBox-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident fugit vero
            eos inventore dignissimos quis ipsam voluptates illo aliquid corrupti libero
            distinctio deserunt, nemo alias fuga, dolores ex maxime recusandae quibusdam
            mollitia? Delectus incidunt sequi odit quasi cum adipisci a cupiditate, aliquam
            distinctio? Sint iusto sapiente velit molestiae necessitatibus esse.
          </p>
          <p>
            Delectus incidunt sequi odit quasi cum adipisci a cupiditate, aliquam
            distinctio? Sint iusto sapiente velit molestiae necessitatibus esse.
          </p>
        </div>
      </div>
    </div>
  )
}
export default DescriptionBox