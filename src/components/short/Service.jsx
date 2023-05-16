/* eslint-disable react/prop-types */

function Service({service}) {
  return (
    
      <div className='flex gap-2 w-full'>
        <span className="w-44 mb-5">{service.icon}</span>
        <div>
          <h4 className="text-light text-xl font-semibold mb-5">
            {service.title}
          </h4>
          <p className="text-slate-500 text-sm w-full">{service.des}</p>
        </div>
      </div>
    
  );
}

export default Service