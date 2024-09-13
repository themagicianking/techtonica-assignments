import Card from 'react-bootstrap/Card';

function SearchResult(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.eventname}</Card.Title>
        <p>Takes place at {props.eventlocation}</p>
      </Card.Body>
    </Card>
  );
}

export default SearchResult;
