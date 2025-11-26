type Props = {
    params:Promise<{id:string}>
}

const Meeting = async({params}:Props) => {

    const {id}= await params;
  return (
    <div>
      Meeting Room #{id}
    </div>
  )
}

export default Meeting
