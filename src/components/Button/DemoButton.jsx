import Button from "./Button";

function DemoButton() {
  const handleSubmit = () => alert("Submitted!");
  const handleDelete = () => alert("Deleted!");
  const handleClose = () => alert("Closed!");
  const handleSave = () => alert("Saved!");

  return (
    <div className="p-6 space-x-4">
      <Button type="submit" variant="primary" size="lg" onClick={handleSubmit}>
        Submit
      </Button>

      <Button variant="danger" size="md"  onClick={handleDelete}>
        Delete
      </Button>

      <Button variant="secondary" size="sm" onClick={handleClose}>
        Close
      </Button>

      <Button variant="success" size="lg" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}

export default DemoButton;
