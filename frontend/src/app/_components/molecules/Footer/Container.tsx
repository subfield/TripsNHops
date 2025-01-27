const Container = () => {
  const year = new Date().getFullYear();
  return (
    <div className="divContainer">
      <div className="py-[20px]">
        <div className="flex-x-y-y !items-end -my-[2.5px]">
          <div className="py-[2.5px] flex-auto w-auto">
            <div>TripsNHops</div>
          </div>
          <div className="py-[2.5px] flex-auto w-auto">&copy; Alright reserved. {year}</div>
        </div>
      </div>
    </div>
  )
}

export default Container