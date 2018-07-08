import React from 'react';
import { formatDate } from './../../formatting';

export default ({films}) =>
    <div>

        <div className="standard-row-height row center-xs middle-xs">
            <div className="col-xs">MOVIE</div>
            <div className="col-xs">DIRECTOR</div>
            <div className="col-xs">PRODUCER(S)</div>
            <div className="col-xs">RELEASE DATE</div>
        </div>

        {
            films
                .map(({title, release_date, director, episode_id, producer}, key) =>
                    <div className="standard-row-height row center-xs middle-xs" key={ key }>

                        <div className="col-xs">
                            Ep. { episode_id }: { title }
                        </div>

                        <div className="col-xs">
                            { director }
                        </div>

                        <div className="col-xs">
                            { producer }
                        </div>

                        <div className="col-xs">
                            { formatDate(release_date) }
                        </div>

                    </div>
                )
        }

    </div>