import React from 'react';

const Rank = ({name, entries}) => {
	return(
		<div>
			<div className = 'white f3'>
				{`Hello ${name}, your current facial recognition count is:`}
			</div>
			<div className = 'white f1'>
				{entries}
			</div>	
		</div>	
	);
}

export default Rank;

/*
const Rank = ({name, entries}) => {
	
}

{`${name} , your current rank is...`}
      <div className='white f1 '>
        {entries}
      </div>

      */