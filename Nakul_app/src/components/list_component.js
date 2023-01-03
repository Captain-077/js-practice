import ListItemComponent from "./list_itemComponent"
const staticList = [
  { id: '001', imgURL:"https://cdn.pixabay.com/photo/2022/01/03/01/00/ruins-6911495_960_720.jpg", heading: 'Indian News', description: 'some indian news headlines....' },
  { id: '002', imgURL:"https://cdn.pixabay.com/photo/2015/01/21/11/13/lights-606588_960_720.jpg", heading: 'UK News', description: 'some uk news headlines....' },
  { id: '003', imgURL:"https://cdn.pixabay.com/photo/2018/03/07/17/15/balloon-3206530_960_720.jpg", heading: 'International News', description: 'some international news headlines....' },
  { id: '003', imgURL:"https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_960_720.jpg", heading: 'International News', description: 'some international news headlines....' }
]
function ListComponent() {

  function renderListItem(data) {
    const { id, imgURL,heading, description } = data;
    return <ListItemComponent
      key={id}
      imgURL={imgURL}
      heading={heading}
      description={description} />
    //return <ListItemComponent {...data} />
  }
  return (
    <ul>
      {
        staticList.map(renderListItem)
      }
    </ul>
  )
}

export default ListComponent;