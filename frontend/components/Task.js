"use client"
import { format } from "date-fns";
import { Star, Trash2 } from "lucide-react";

const Task = ({ title, description, dueDate, status }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked=()=>{
    
  }
  return (
    <section className="flex flex-col max-w-xs sm:max-w-sm  w-full h-full bg-customGray border border-gray-600 p-2 px-4  aspect-[1/0.2] rounded-lg gap-y-2">
      <div className="flex-[1_1_100%] flex items-start ">
        <input
          type="checkbox"
          name="radio-1"
          className="checkbox checkbox-sm"
          checked={isChecked}
          onChange={handleChecked}
        />
        <div className="flex-[1_1_0%] flex flex-col ml-2">
          <h4 className="text-sm font-semibold line-clamp-2">{title}</h4>
          <p className="text-xs text-gray-300 line line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex items-start gap-x-1">
          <button>
            <Star size={20} />
          </button>
          <button>
            <Trash2 size={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <span className="text-xs text-green-500">
          {format(new Date(dueDate), "d MMMM, yyyy")}
        </span>
        <span className="text-xs text-blue-500">{status}</span>
      </div>
    </section>
  );
};

export default Task;
