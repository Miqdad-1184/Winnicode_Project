import '../../../css/input.css'
import Button from '../button/buttonFlex';

export default function SortBy({ sortBy, setSortBy }) {

  const buttonSortOptions = {
    Relevansi : 'Relevansi',
    Terbaru : 'Terbaru',
    Populer : 'Populer',
  };
  
  return (
    <div className="SortBy">
      <h3>Urut Berdasarkan</h3>
      <Button 
      children={buttonSortOptions.Relevansi}
      onClick={() => setSortBy(buttonSortOptions.Relevansi)}
      className={sortBy === buttonSortOptions.Relevansi ? 'active' : ''}
      />
      <Button
        children={buttonSortOptions.Terbaru}
        onClick={() => setSortBy(buttonSortOptions.Terbaru)}
        className={sortBy === buttonSortOptions.Terbaru ? 'active' : ''}
      />
      <Button
        children={buttonSortOptions.Populer}
        onClick={() => setSortBy(buttonSortOptions.Populer)}
        className={sortBy === buttonSortOptions.Populer ? 'active' : ''}
      />
    </div>
  );
}