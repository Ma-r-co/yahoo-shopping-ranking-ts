import * as React from 'react';
import { Category } from '../store/shopping/types';
import { RankingType } from '../store/ranking/types';
import { makeStyles, createStyles, Theme, Toolbar, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    card: {
      maxWidth: '500px',
      margin: '32px auto',
    },
    media: {
      backgroundSize: 'contain',
      height: '200px',
      width: 'auto',
    },
  })
);

interface RankingProps {
  categoryId: string;
  onChange: (arg: string) => any;
  category: Category | undefined;
  ranking: RankingType[] | undefined;
  error: boolean;
};

const Ranking: React.FC<RankingProps> = (
  { categoryId = '1', 
    onChange, 
    category, 
    ranking, 
    error 
  }) => {  
    const classes = useStyles();
    React.useEffect( () => onChange(categoryId), [categoryId, onChange])

    return (
      <div className={classes.content}>
        <Toolbar />
        <h2>{
        typeof category !== 'undefined'
        ? `${category.name}のランキング`
        : '!! Category is undefined !!'
        }</h2>

        {(() => {
          if (error) {
            return <p>Error!!</p>
          } else if (typeof ranking === 'undefined') {
            return <p>Loading...</p>
          } else {
            return ranking.map((item, i) => (
              <Card
                key={`ranking-item-${item.code}`}
                className={classes.card}
              >
                <CardMedia
                  image={item.imageUrl}
                  title={`第${i + 1}い${item.name}`}
                  className={classes.media}
                />
                <CardContent>
                  <Typography variant="subtitle1">
                    {`第${i + 1}位 ${item.name}`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    href={item.url}
                  >商品ページへ</Button>
                </CardActions>
              </Card>
            ))
          };
        })()}
      </div>
    );
}

export default Ranking;