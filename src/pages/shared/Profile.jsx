import { images } from '@assets/images';

const Profile = () => {
    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
                <div className='flex items-center justify-center mb-4'>
                    <img src={images.logo} alt='Profile' className='w-24 h-24 rounded-full border-4 border-blue-500' />
                </div>
                <h1 className='text-center text-2xl font-bold text-gray-800 mb-2'>Đoàn Quang Huy</h1>
                <p className='text-center text-gray-600 mb-4'>Software Developer</p>
                <div className='flex justify-between text-gray-600 mb-6'>
                    <div className='text-center'>
                        <p className='font-bold'>100</p>
                        <p>Posts</p>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold'>250</p>
                        <p>Followers</p>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold'>180</p>
                        <p>Following</p>
                    </div>
                </div>
                <a href='https://github.com/quanghuybest2k2' target='__blank'>
                    <button className='w-full bg-gray-950 text-white py-2 rounded-lg hover:bg-blue-600 transition'>
                        Github
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Profile;
