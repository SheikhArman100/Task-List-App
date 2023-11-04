const Task = () => {
  return (
    <section className="w-full bg-customGray border border-gray-600 p-2 px-4 rounded-lg flex   gap-x-2  drop-shadow-lg">
      <input
        type="checkbox"
        name="radio-10"
        className="checkbox checkbox-accent"
        
      />
      <div className="flex flex-col gap-y-2">
        <div>
          <h4 className="text-sm font-semibold line-clamp-2">
            Title of the task
          </h4>
          <p className="text-xs text-gray-300 line line-clamp-2">
            It’s simple to get started with TravelAds: sign up, customize your
            ad content, define your target audience and bid budget, and you’re
            ready to launch your campaign.
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-xs text-green-500">22 November ,2023</span>
          <span className="text-xs text-blue-500">In progress</span>
        </div>
      </div>
    </section>
  );
};

export default Task;
