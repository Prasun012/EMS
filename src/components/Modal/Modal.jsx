import Button from "../Button/Button";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      
      
      <div
        className="absolute inset-0" 
        onClick={onClose} 
      ></div>

      {/* Modal Card */}
      <div className="bg-white w-[400px] rounded-xl shadow-lg p-6 relative z-50 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <Button variant="danger" size="sm" onClick={onClose}>
            X
          </Button>
        </div>

        {/* Body */}
        <div>{children}
</div>
      {/* Footer */}
 <div className="flex justify-end gap-2 mt-4">
  <Button variant="success">Save</Button>
  <Button variant="secondary" onClick={onClose}>Cancel</Button>
  

        </div>
      
</div>

    </div>
  );
};

export default Modal;
