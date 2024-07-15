import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";


export const ResultButton = (data) => {
    const {handleAdd} = data
    const [openModal, setOpenModal] = useState(false);
    const [isAdded, setIsAdded] = useState(false)
    const [confirmedData, setConfirmedData] = useState({
        name: data.data.food_info.display_name,
        calories: data.data.quantity/100 * data.data.food_info.nutrition.calories_100g,
        carbs: data.data.quantity/100 * data.data.food_info.nutrition.carbs_100g,
        fats: data.data.quantity/100 * data.data.food_info.nutrition.fat_100g,
        proteins: data.data.quantity/100 * data.data.food_info.nutrition.proteins_100g
    })
    const handleAccept = () =>{
        setOpenModal(false)
        setIsAdded(true)
        console.log(confirmedData)
        handleAdd((prev)=> [...prev, confirmedData])
    }
  return (
    <>
    <div  onClick={() => setOpenModal(true)} style={{borderColor: !isAdded ? '#0343a5' : '#41b549'}} className={`flex items-center justify-between gap-3 px-2 py-1 border-2 rounded-full cursor-pointer w-fit`}>
      <p className='text-sm font-medium font-poppins '>{data.data.food_info.display_name}</p>
      {isAdded? (<div className='p-1 rounded-full bg-secondary'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-white h4">
         <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>):(
      <div className='p-1 rounded-full bg-primary'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4 text-white color-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      </div>
      )}
    </div>
    <Modal size={'sm'} show={openModal && !isAdded} onClose={() => setOpenModal(false)}>
        <Modal.Header className="text-lg font-poppins">Konfirmasi Makananmu</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <div>
              <div className="block mb-2">
                <Label className="font-poppins" htmlFor="namaMakanan" value="Nama makananmu" />
              </div>
              <TextInput
                className="font-poppins"
                id="namaMakanan"
                placeholder={data.data.food_info.display_name}
                defaultValue={data.data.food_info.display_name}
                onChange={(event) => setConfirmedData({...confirmedData, name : event.currentTarget.value})}
                required
              />
            </div>
          <div>
              <div className="block mb-2">
                <Label className="font-poppins" htmlFor="kalori" value="Estimasi Kalori" />
              </div>
              <TextInput
                className="font-poppins"
                id="kalori"
                type="number"
                placeholder={data.data.quantity/100 * data.data.food_info.nutrition.calories_100g}
                defaultValue={data.data.quantity/100 * data.data.food_info.nutrition.calories_100g}
                onChange={(event) => setConfirmedData({...confirmedData, calories :event.currentTarget.value})}
                required
              />
            </div>
          <div>
              <div className="block mb-2">
                <Label className="font-poppins" htmlFor="karbohidrat" value="Estimasi Karbohidrat (gram)" />
              </div>
              <TextInput
                className="font-poppins"
                id="karbohidrat"
                type="number"
                placeholder={data.data.quantity/100 * data.data.food_info.nutrition.carbs_100g}
                defaultValue={data.data.quantity/100 * data.data.food_info.nutrition.carbs_100g}
                onChange={(event) => setConfirmedData({...confirmedData, carbs :event.currentTarget.value})}
                required
              />
            </div>
          <div>
              <div className="block mb-2">
                <Label className="font-poppins" htmlFor="lemak" value="Estimasi Lemak (gram)" />
              </div>
              <TextInput
                className="font-poppins"
                id="lemak"
                type="number"
                placeholder={data.data.quantity/100 * data.data.food_info.nutrition.fat_100g}
                defaultValue={data.data.quantity/100 * data.data.food_info.nutrition.fat_100g}
                onChange={(event) => setConfirmedData({...confirmedData, fat :event.currentTarget.value})}
                required
              />
            </div>
          <div>
              <div className="block mb-2">
                <Label className="font-poppins" htmlFor="protein" value="Estimasi Protein (gram)" />
              </div>
              <TextInput
                className="font-poppins"
                id="protein"
                type="number"
                placeholder={data.data.quantity/100 * data.data.food_info.nutrition.proteins_100g}
                defaultValue={data.data.quantity/100 * data.data.food_info.nutrition.proteins_100g}
                onChange={(event) => setConfirmedData({...confirmedData, proteins :event.currentTarget.value})}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <button  onClick={handleAccept } className="w-full py-2 text-lg font-semibold text-center text-white rounded-lg bg-primary px3 font-poppins">
                Confirm
            </button>
          {/* <Button>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}
