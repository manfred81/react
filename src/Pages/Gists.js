import { CircularProgress } from '@mui/material';
import React, { useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGists } from '../store/gists/actions';
import { selectGists, selectGistsError, selectGistsLoading } from '../store/gists/selectors';

class PureExample extends React.PureComponent {
    state = {};
    render() {
        return <div>Hello</div>;
    }
}

const Gists = () => {
   const dispatch = useDispatch();
   const gists = useSelector(selectGists);
   const loading = useSelector(selectGistsLoading);
   const error = useSelector(selectGistsError);
 

    const reguestGists =  async () => {
            dispatch(getAllGists());
      }; 

    useEffect(() => {
        reguestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
    []
    );

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <>
            <h3>Error</h3>
            <button onClick={reguestGists}>Retry</button>
            </>
        );
    }       

    return (<ul>{gists.map(renderGist)}
    <br/>
    <PureExample />
    </ul>
    );
};

export default Gists;