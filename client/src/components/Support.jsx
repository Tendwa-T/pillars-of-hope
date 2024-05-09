import { Box, Typography} from "@mui/material";


export default function Support() {
  return (
    <Box className=' w-screen h-screen p-2 '>
              
        <section className="bg-white">
          <Box className="m-4 justify-center p-2">
            <Typography variant="h3" className="font-sans font-bold  mb-2 text-center">Support us </Typography>
            <Typography variant="h5" className=' text-center'>Small actions lead to big changes</Typography>
          </Box>
          
        
          <Box className='flex items-center justify-center gap-10 mb-6 min-h-screen p-4'>

            <Box className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-10 p-10'>

              <Box className="size-96 bg-white rounded-lg sm:w-96 sm:h-full" >
                  <img src="assets/children.jpeg" alt="Coming up.." className="mb-3 rounded-sm "/>
                  <Box className="p-2">
                    <Typography variant="h5" className="font-bold mb-2">Help for School fees</Typography>
                    <Typography variant="h6" className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography> 
                  </Box>
                  
              </Box>

              <Box className="size-96 bg-white rounded-lg">
                <img src="assets/children.jpeg" alt="Coming up.." className="mb-3 rounded-sm"/>
                <Box className="p-2">
                  <Typography variant="h5" className="font-bold mb-2">Help for Bills</Typography>
                  <Typography variant="h6" className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                </Box>
                
              </Box>

              <Box className="size-96 bg-white rounded-lg">
                <img src="/assets/children.jpeg" alt="Coming up.." className="mb-3 rounded-sm"/>
                <Box className="p-2">
                  <Typography variant="h5" className="font-bold mb-2">Help for Food and clothing</Typography>
                  <Typography variant="h6" className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                </Box>
                
              </Box>
              
            </Box>
           
            </Box>
        
          <Box className='items-center justify-center contact bg-white  p-2'>
            <Typography variant="h3" className='text-center'>How to get to us:</Typography>
            <Box className=' gap-14 p-14 grid grid-cols-2 border-3 '>
              <Box className='flex size-52 w-full rounded-lg '>
                <Box className='p-10'><img src="../public/assets/location.png" alt="" className='size-20' /></Box>
                <p className='mt-10'>diam volutpat commodo sed <br /> diam volutpat commodo sed <br /> diam volutpat commodo sed <br />diam volutpat commodo sed</p>
              </Box>

              <Box className='flex size-52 w-full '>
                <Box className=" img p-10">
                  <img src="../public/assets/phone.png" className="size-20"alt="coming..." /></Box>
                  <p className='text-bold mt-12'>09-093-234-134 <br /> <br />Reach us through this number</p>
              </Box>

              <Box className='flex p-6 size-52 w-full'>
                <Box className='p-10'><img src="../public/assets/email.png" className="size-20" alt="" /></Box>
                <p className='mt-12 '>Lorem ipsum dolor sit</p>
              </Box>

            <Box className='block p-4 size-52 w-full'>
              <Box className="text-center">
                <Typography variant="h5" className='mt-4 mb-2 '>To contribute financially:</Typography>
                <Typography variant='h6'>Mpesa Paybill No: 874 580 (Acount no. Your Name)</Typography>
                <Typography variant='h6' className='h6'>Cooperative Bank Branch: Athi River</Typography>
                <Typography variant="h6" className='h6'>Account No: 01128564984200</Typography>
                <Typography variant="h6" className='h6'>Account Name: Pillars Of Hope Childrens Home</Typography>
                </Box>
            </Box>
          </Box>
          
          </Box>
         
        </section>
      
      
    </Box>
  );
}


