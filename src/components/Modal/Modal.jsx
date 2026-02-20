import Button from "../Button/Button";

const Modal = ({ title, children, onClose, onSave }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center">
      
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white w-[400px] rounded-xl shadow-2xl p-6 z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>
          <Button variant="danger" size="sm" onClick={onClose}>
            X
          </Button>
        </div>

        {/* Body */}
        <div>{children}</div>

        {/* Footer */}
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="success" onClick={onSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Modal;
//uses props to create a reusable modal component that can be easily integrated
//  into different parts of the application, providing a consistent user experience for dialogs and forms.