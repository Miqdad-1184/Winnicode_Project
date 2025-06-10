import '../../../css/input.css';
import ButtonFlex from '../button/buttonFlex';

export default function SortTime({ sortTime, setSortTime, startDate, setStartDate, endDate, setEndDate }) {
  const buttonSortOptions = {
    HariIni: 'Hari Ini',
    Kemarin: 'Kemarin',
    Seminggu: 'Seminggu Kemarin',
  };

  return (
    <div className="SortTime">
      <h3>Waktu</h3>

      <ButtonFlex
        children={buttonSortOptions.HariIni}
        onClick={() => setSortTime(buttonSortOptions.HariIni)}
        className={sortTime === buttonSortOptions.HariIni ? 'active' : ''}
      />
      <ButtonFlex
        children={buttonSortOptions.Kemarin}
        onClick={() => setSortTime(buttonSortOptions.Kemarin)}
        className={sortTime === buttonSortOptions.Kemarin ? 'active' : ''}
      />
      <ButtonFlex
        children={buttonSortOptions.Seminggu}
        onClick={() => setSortTime(buttonSortOptions.Seminggu)}
        className={sortTime === buttonSortOptions.Seminggu ? 'active' : ''}
      />

      <div className="rangeDate">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
}
