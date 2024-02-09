import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function LoadingData() {
    return (
        <>

            <div className='text-center'>
                <span className="visually-hidden">Loading...</span>

                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button >
            </div>
        </>
    );
}

export default LoadingData;