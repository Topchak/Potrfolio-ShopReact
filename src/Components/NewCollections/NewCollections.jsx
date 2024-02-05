import './NewCollections.css';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className="new-collections">
      <div className="container">
        <div className="new-collections-row">
        <h2>New Collections</h2>
        <hr/>
        <div className="new-collections-row">
          <div className="new-collections-items">
            {new_collections.map((item, i) => (<Item key={i} {...item}/>))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;